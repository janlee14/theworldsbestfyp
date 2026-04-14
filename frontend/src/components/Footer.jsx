import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">{t.footer.brand}</div>
          <div>{t.footer.description}</div>
        </div>
        <div>{t.footer.stack}</div>
      </div>
    </footer>
  );
}