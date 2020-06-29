import { Model, BuildOptions } from 'sequelize';

/* 各モデル毎に作成する */
interface TestClassModel extends Model {
    readonly id: number;
    attr1: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}

type TestClassModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): TestClassModel;
}
/* ------ここまで------ */

interface DBModel {
    /* キーはモデル名と一致させること */
    TestClass: TestClassModelStatic;
}

declare const db: DBModel;
export = db;
