import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import SwsCompany from "./SwsCompany";

@Entity("swsCompanyScore")
export class SwsCompanyScore {
  @PrimaryColumn({ nullable: false })
  id: number;

  @OneToOne(() => SwsCompany, swsCompany => swsCompany.id)
  company: SwsCompany;

  @Column({ nullable: false })
  date_generated: Date;

  @Column({ nullable: false })
  dividend: number;

  @Column({ nullable: false })
  future: number;

  @Column({ nullable: false })
  health: number;

  @Column({ nullable: false })
  management: number;

  @Column({ nullable: false })
  past: number;

  @Column({ nullable: false })
  value: number;

  @Column({ nullable: false })
  misc: number;

  @Column({ nullable: false })
  total: number;

  @Column()
  sentence: string;
}

export default SwsCompanyScore;