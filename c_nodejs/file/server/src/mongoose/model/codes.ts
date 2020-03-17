/**
 * コアモジュール
 */
import * as mongoose from 'mongoose';

/**
 * mongoose
 */
import { schema } from 'src/mongoose';

/**
 * interface
 */
interface i_codes extends mongoose.Document {
  id: string;
  genreId: number;
  title: string;
  source: string;
  created_at: Date;
  updated_at: Date;
}

/**
 * model
 */
const codes = mongoose.model(
  'codes',
  new schema({
    id: { type: String },
    title: { type: String, minlength: 1, maxlength: 15 },
    genreId: {
      type: Number,
      min: 0,
      max: 23,
      validate: {
        validator: v => {
          if (!Number.isInteger(v)) {
            return false;
          }
          return true;
        }
      }
    },
    source: { type: String, minlength: 1, maxlength: 2000 },
    created_at: { type: Date },
    updated_at: { type: Date }
  }).index({ id: 1 }, { unique: true })
);

export const select = async (id: string) => {
  const _ret = await codes.find({ id: id });
  if (_ret.length === 0) {
    return false;
  }

  return _ret;
};

export const insert = async (params: {
  id: string;
  genreId: number;
  title: string;
  source: string;
  created_at: Date;
  updated_at: Date;
}) => {
  return (await codes.insertMany([params])) as i_codes[];
};
