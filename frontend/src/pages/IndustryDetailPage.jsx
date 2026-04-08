import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getIndustryById } from "../data/industryResearch";
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

export default function IndustryDetailPage() {
  const { industryId } = useParams();
  const industry = useMemo(() => getIndustryById(industryId), [industryId]);

  if (!industry) {
    return <section className="section">Industry page not found.</section>;
  }

  return (
    <>
      <section className="hero">
        <div className="badge">{industry.name}</div>
        <h1 className="page-title">{industry.shortTitle}</h1>
        <p className="page-subtitle">{industry.intro}</p>
      </section>

      {industry.sections?.length ? (
        <section className="grid-2">
          {industry.sections.map((section) => (
            <div className="section" key={section.title}>
              <SectionHeader title={section.title} />
              {section.text ? <p>{section.text}</p> : null}
              {section.bullets ? <ul className="list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </div>
          ))}
        </section>
      ) : null}

      {industry.flow ? (
        <section className="section">
          <SectionHeader title="Flow / Mechanism Diagram" />
          <FlowDiagram steps={industry.flow} />
        </section>
      ) : null}

      {industry.charts?.length ? (
        <section className="grid-2">
          {industry.charts.map((chart) => (
            <div className="section" key={chart.title}>
              <SectionHeader title={chart.title} />
              {renderChart(chart)}
            </div>
          ))}
        </section>
      ) : null}

      {industry.tables?.map((table) => (
        <section className="section" key={table.title}>
          <SectionHeader title={table.title} />
          <DataTable columns={table.columns} rows={table.rows} />
        </section>
      ))}

      {industry.cases?.length ? (
        <section className="section">
          <SectionHeader title="RWA应用案例 / Use cases" />
          <ul className="list">
            {industry.cases.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      ) : null}

      <section className="section">
        <SectionHeader title="Recommendations for the Company" />
        <ul className="list">
          {industry.recommendations.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </>
  );
}
