import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import SwsCompany from "./SwsCompany";

@Entity("swsCompanyPriceClose")
export class SwsCompanyPriceClose {
  @PrimaryColumn({ nullable: false })
  date: Date;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  date_created: Date;

  @PrimaryGeneratedColumn("uuid")
  @ManyToOne(() => SwsCompany, (swsCompany) => swsCompany.priceCloses)
  @JoinColumn({ name: "company_id" })
  company_id: SwsCompany;
}

export default SwsCompanyPriceClose;
