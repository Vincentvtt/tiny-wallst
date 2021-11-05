import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useSortBy, useTable, useFilters } from "react-table";
import { Company } from "../types/company";
import { NumberRangeColumnFilter } from "./table-filters/NumberRangeColumnFilter";
import { SelectColumnFilter } from "./table-filters/SelectColumnFilter";
import { RadarChart } from "./RadioChart";
import Score from "../types/score";

interface CompanyTableProps {
  data: Company[];
}

function CompanyTable({ data }: CompanyTableProps): JSX.Element {
  const columns = React.useMemo(
    () => [
      {
        Header: "Company Overview",
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
            Filter: SelectColumnFilter,
            filter: "includes",
          },
          {
            Header: "Last Price ($)",
            accessor: "last_known_price",
          },
          {
            Header: "Volatility (last 90 days)",
            accessor: "max_price_fluctuation",
          },
          {
            Header: "Overall Score",
            accessor: "score.total",
            Filter: NumberRangeColumnFilter,
            filter: "between",
          },
          {
            Header: "Score",
            accessor: "score",
            Cell: ({ value }: { value: Score }) => (
              <RadarChart
                value={value.value}
                future={value.future}
                past={value.past}
                health={value.health}
                dividend={value.dividend}
              />
            ),
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
      useFilters,
      useSortBy
    );

  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <Flex>
        <Box ml={"auto"} mt={4}>
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <Box key={column.id} float="left" ml={4} mb={-5}>
                  <label htmlFor={column.id}>{column.render("Header")}: </label>
                  {column.render("Filter")}
                </Box>
              ) : null
            )
          )}
        </Box>
      </Flex>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, rowIdx) => (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              key={rowIdx}
              backgroundColor={rowIdx == 1 ? "#D3D3D3" : "white"}
            >
              {headerGroup.headers.map((column, idx) => (
                <Th
                  userSelect="none"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={idx}
                  fontSize={rowIdx == 0 && idx == 0 ? "1.5em" : "0.75em"}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    mt={rowIdx == 0 && idx == 0 ? "-1em" : "0"}
                  >
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
          {firstPageRows.map((row, idx) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={idx}>
                {row.cells.map((cell, idx) => {
                  return (
                    <Td {...cell.getCellProps()} key={idx} textAlign="center">
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <br />
      <Center pb={4}>
        Showing the first {firstPageRows.length} of {rows.length} rows
      </Center>
    </>
  );
}

export default CompanyTable;
