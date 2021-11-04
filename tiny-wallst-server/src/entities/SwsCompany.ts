import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import SwsCompanyScore from "./SwsCompanyScore";
import { SwsCompanyPriceClose } from "./SwsCompanyPriceClose";

@Entity("swsCompany")
export class SwsCompany {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  ticker_symbol: string;

  @Column()
  exchange_symbol: string;

  @Column({ unique: true })
  unique_symbol: string;

  @Column()
  date_generated: Date;

  @Column()
  security_name: string;

  @Column()
  exchange_country_iso: string;

  @Column()
  listing_currency_iso: string;

  @Column()
  canonical_url: string;

  @Column()
  unique_symbol_slug: string;

  @OneToOne(() => SwsCompanyScore, (swsCompanyScore) => swsCompanyScore.id, {
    eager: true,
  })
  @JoinColumn({ name: "score_id" })
  score: SwsCompanyScore;

  @OneToMany(
    () => SwsCompanyPriceClose,
    (swsCompanyPriceClose) => swsCompanyPriceClose.company_id
  )
  priceCloses: SwsCompanyPriceClose[];
}

export default SwsCompany;
