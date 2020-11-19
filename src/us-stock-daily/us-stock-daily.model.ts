import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'newus_stocks_dcopy', createdAt: false, updatedAt: false })
export class USStockDaily extends Model<USStockDaily> {
  @Column({ comment: '日期' })
  date: string;
  @Column({ comment: '代码' })
  symbol: string;
  @Column({ comment: '名称' })
  name: string;
  @Column({ comment: '板块' })
  sector: string;
  @Column({ comment: '是否标普500 成分股' })
  is_spx: string;
  @Column({ comment: '开盘价' })
  open: number;
  @Column({ comment: '最高价' })
  high: number;
  @Column({ comment: '最低价' })
  low: number;
  @Column({ comment: '收盘价' })
  close: number;
  @Column({ type: DataType.BIGINT, comment: '成交量' })
  volume: number;
  @Column({ type: DataType.BIGINT, comment: '月均成交量' })
  ma_volume: number;
  @Column({ type: DataType.BIGINT, comment: '成交量/月均量' })
  volume_rate: number;
  @Column({ type: DataType.BIGINT, comment: '成交额' })
  amount: number;
  @Column({ type: DataType.BIGINT, comment: '月（）均成交额' })
  ma_amt: number;
  @Column({ type: DataType.BIGINT, comment: '成交额/月均额' })
  amt_rate: number;
  @Column({ comment: 'MA20' })
  s_ma: number;
  @Column({ comment: 'MA60' })
  m_ma: number;
  @Column({ comment: 'MA120' })
  l_ma: number;
  @Column({ comment: 'EMA20' })
  s_ema: number;
  @Column({ comment: 'EMA60' })
  m_ema: number;
  @Column({ comment: 'EMA120' })
  l_ema: number;
  @Column({ comment: 'C/S' })
  cs: number;
  @Column({ comment: 'S/M' })
  sm: number;
  @Column({ comment: 'M/L' })
  ml: number;
  @Column({ comment: 'M+M/L' })
  bais: number;
  @Column({ comment: 'EMA C/S' })
  ecs: number;
  @Column({ comment: 'EMA S/M' })
  esm: number;
  @Column({ comment: 'EMA M/L' })
  eml: number;
  @Column({ comment: 'EMA C/S+S/M+M/L' })
  ebais: number;
  @Column({ comment: 'MA20 抵扣价 ' })
  s_close: number;
  @Column({ comment: 'MA60 抵扣价 ' })
  m_close: number;
  @Column({ comment: 'MA120 抵扣价 ' })
  l_close: number;
}
