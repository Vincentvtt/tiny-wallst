import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { useSortBy, useTable } from "react-table";

function CompanyTable({ data }: any): JSX.Element {
  const columns = React.useMemo(
    () => [
      {
        Header: "Companies",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Symbol",
            accessor: "unique_symbol",
          },
          {
            Header: "Exchange",
            accessor: "exchange_symbol",
          },
          {
            Header: "Last Price ($)",
            accessor: "last_known_price",
          },
          {
            Header: "Max Price Fluctuation (last 90 days)",
            accessor: "max_price_fluctuation",
          },
          {
            Header: "Overall Score",
            accessor: "score.total",
          },
          {
            Header: "Snowflake Score",
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  userSelect="none"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Flex alignItems="center">
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronDownIcon ml={1} w={4} h={4} />
                      ) : (
                        <ChevronUpIcon ml={1} w={4} h={4} />
                      )
                    ) : (
                      ""
                    )}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <br />
      <Center>
        Showing the first {firstPageRows.length} of {rows.length} rows
      </Center>
    </>
  );
}

export default CompanyTable;
