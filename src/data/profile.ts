import type { Localized } from "@/types/i18n";

export interface Profile {
  name: Localized;
  title: Localized;
  location: Localized;
  email: string;
  bio: Localized;
  avatar: string;
}

export const profile: Profile = {
  name: {
    ja: "mahiro",
    en: "mahiro",
  },
  title: {
    ja: "Software Engineer",
    en: "Software Engineer",
  },
  location: {
    ja: "東京",
    en: "Tokyo, Japan",
  },
  email: "mahiro.yoshie@gmail.com",
  bio: {
    ja: "こんにちは、mahiroです。\n\nまほろば創研株式会社で取締役CTOをしています。まほろば創研は、設備の『予知保全』に特化したAIやシステムを開発している会社です。予知保全とは、設備の不具合の兆候を察知して、故障を事前に防ぐことです。検査会社などドメイン知識を持つ企業との共創を通じて、配管腐食の検査AIやポンプ異常検知、漏電検知といった仕組みを作っています。\n\n日本酒とお寿司、猫が好きです。🐈",
    en: "Hi, I'm mahiro.\n\nI'm Director & CTO at Mahoroba Souken Inc., a company that develops AI and systems specialized in predictive maintenance of equipment. Predictive maintenance means detecting early signs of equipment trouble and preventing failures before they happen. Together with partners who have deep domain knowledge, such as inspection companies, we build systems such as pipe corrosion inspection AI, pump anomaly detection, and electrical leakage detection.\n\nI love sake, sushi, and cats. 🐈",
  },
  avatar: "/images/avatar.png",
};
