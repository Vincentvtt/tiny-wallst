import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import SwsCompanyScore from "./SwsCompanyScore";

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

  @OneToOne(() => SwsCompanyScore, (swsCompanyScore) => swsCompanyScore.id)
  @JoinColumn({ name: "score_id" })
  score_id: SwsCompanyScore;
}

export default SwsCompany;
