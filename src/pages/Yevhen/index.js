import { splitCode } from 'hocs';

export default splitCode({ resolve: () => import(/* webpackChunkName: "Yevhen" */'./Yevhen') });
