import { Api, ApiMedThodEnum } from '../../../routeConfig/interface/route';
import handler from './handler';
import validator from './validator';

export default {
  path: '',
  medthod: ApiMedThodEnum.GET,
  middlewares: [],
  validator,
  handler
} as Api;
