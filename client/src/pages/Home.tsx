import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();
  const isEn = !i18n.language?.startsWith("zh");
  return (
    <iframe
      src="/original.html"
      title={isEn ? "Figo Technology Official Website" : "火鹰科技官网"}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
    />
  );
}
