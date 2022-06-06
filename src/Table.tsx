import { FC, ReactNode } from "react";
import { ServiceTable } from "./data";

export interface TableProps {
  data: ServiceTable;
}

const Column = ({ children }: { children: ReactNode }) => {
  return <div style={{ flex: 1 }}>{children}</div>;
};

const Row = ({ children }: { children: ReactNode }) => {
  return <div style={{ display: "flex", textAlign: "center" }}>{children}</div>;
};

export const RenderTableData = ({
  data
}: {
  data: number | boolean | string;
}) => {
  if (typeof data === "boolean") {
    return data ? (
      /**Check mark */ <span>&#10003;</span>
    ) : (
      /**Cross mark */ <span>&#10007;</span>
    );
  }
  return <span>{String(data)}</span>;
};

export const Table: FC<TableProps> = ({ data }) => {
  return (
    <div>
      <Row>
        <Column>
          <p>Some name</p>
        </Column>
        {data.table.map((column, index) => (
          //mapping the table to generate headers
          <Column key={index}>
            <p>{column.title}</p>
            <p>{column.price}</p>
            <ul>
              {column.points.map((point) => {
                return <li key={point}>{point}</li>;
              })}
            </ul>
            <a href={column.link}>Learn more</a>
          </Column>
        ))}
      </Row>
      {data.rowReference.map((referenceHeader, rowIndex) => {
        //mapping the reference to generate section //each referenceHeader is {title:string;order:string[]}
        return (
          <section key={rowIndex}>
            <h3>{referenceHeader.title}</h3>
            {referenceHeader.order.map((currentKey) => {
              //mapping the string array of order to generate rows //currentKey is string
              return (
                <Row key={currentKey}>
                  <Column>{currentKey}</Column>
                  {data.table.map((tableColumn, index) => {
                    //mapping data table to compare with currentKey
                    const rows = tableColumn.rows;
                    const currentData = rows.find(
                      //comparing with title to find the object
                      (row) => row.title === referenceHeader.title
                    );
                    let output: string | number | boolean = false;
                    if (currentData) {
                      //if is array
                      if (Array.isArray(currentData.data)) {
                        output = currentData.data.includes(currentKey);
                      }
                      //if currentData is an object
                      else if (typeof currentData.data === "object") {
                        output = currentData.data[currentKey] || "-";
                      }
                    }
                    return (
                      <Column key={index}>
                        <RenderTableData data={output} />
                      </Column>
                    );
                  })}
                </Row>
              );
            })}
          </section>
        );
      })}
    </div>
  );
};
