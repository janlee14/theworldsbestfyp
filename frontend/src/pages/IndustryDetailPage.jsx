import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getIndustryById } from "../data/industryResearch";
import { useI18n } from "../i18n";
import SectionHeader from "../components/SectionHeader";
import { DataTable, FlowDiagram } from "../components/ContentBlocks";
import { MultiLineChart, SimpleBarChart, SimplePieChart } from "../components/Charts";

function renderChart(chart) {
  if (chart.type === "line") {
    return <MultiLineChart data={chart.data} lines={chart.lines} />;
  }
  if (chart.type === "pie") {
    return <SimplePieChart data={chart.data} />;
  }
  return <SimpleBarChart data={chart.data} bars={chart.bars} />;
}

const pageText = {
  en: {
    notFound: "Industry page not found.",
    flowTitle: "Flow / Mechanism Diagram",
    useCasesTitle: "RWA Use Cases",
    recommendationsTitle: "Recommendations for the Company",
  },
  zh: {
    notFound: "未找到该行业页面。",
    flowTitle: "流程 / 机制图",
    useCasesTitle: "RWA应用案例",
    recommendationsTitle: "对公司的建议",
  },
};

export default function IndustryDetailPage() {
  const { industryId } = useParams();
  const { language } = useI18n();

  const industry = useMemo(() => getIndustryById(industryId), [industryId]);

  if (!industry) {
    return <section className="section">{pageText[language]?.notFound || pageText.en.notFound}</section>;
  }

  const content = language === "en" && industry.en ? industry.en : industry;
  const ui = pageText[language] || pageText.en;

  return (
    <>
      <section className="hero">
        <div className="badge">{content.name}</div>
        <h1 className="page-title">{content.shortTitle}</h1>
        <p className="page-subtitle">{content.intro}</p>
      </section>

      {content.sections?.length ? (
        <section className="grid-2">
          {content.sections.map((section) => (
            <div className="section" key={section.title}>
              <SectionHeader title={section.title} />
              {section.text ? <p>{section.text}</p> : null}
              {section.bullets ? (
                <ul className="list">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {content.flow ? (
        <section className="section">
          <SectionHeader title={ui.flowTitle} />
          <FlowDiagram steps={content.flow} />
        </section>
      ) : null}

      {content.charts?.length ? (
        <section className="grid-2">
          {content.charts.map((chart) => (
            <div className="section" key={chart.title}>
              <SectionHeader title={chart.title} />
              {renderChart(chart)}
            </div>
          ))}
        </section>
      ) : null}

      {content.tables?.map((table) => (
        <section className="section" key={table.title}>
          <SectionHeader title={table.title} />
          <DataTable columns={table.columns} rows={table.rows} />
        </section>
      ))}

      {content.cases?.length ? (
        <section className="section">
          <SectionHeader title={ui.useCasesTitle} />
          <ul className="list">
            {content.cases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {content.recommendations?.length ? (
        <section className="section">
          <SectionHeader title={ui.recommendationsTitle} />
          <ul className="list">
            {content.recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}