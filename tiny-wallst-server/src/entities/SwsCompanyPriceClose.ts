import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("swsCompanyPriceClose")
export class SwsCompanyPriceClose extends BaseEntity {
  @PrimaryColumn({ nullable: false })
  date: Date;

  @PrimaryGeneratedColumn("uuid")
  company_id: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  date_created: Date;
}

export default SwsCompanyPriceClose;
