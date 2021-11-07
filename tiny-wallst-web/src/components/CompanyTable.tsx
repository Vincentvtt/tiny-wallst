import { ChevronDownIcon, ChevronUpIcon, UpDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useSortBy, useTable, useFilters, useFlexLayout } from "react-table";
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
    () =>
      [
        {
          Header: "Name",
          accessor: "name",
          width: 150,
          minWidth: 150,
          maxWidth: 150,
        },
        {
          Header: "Symbol",
          accessor: "unique_symbol",
          Cell: ({ value }: { value: string }) => (
            <Box>{value.split(":")[1]}</Box>
          ),
        },
        {
          Header: "Exchange",
          accessor: "exchange_symbol",
          Filter: SelectColumnFilter,
          filter: "includes",
        },
        {
          Header: "Last Price",
          accessor: "last_known_price",
          Cell: ({ value }: { value: string }) => (
            <Box>${Number(value).toFixed(2)}</Box>
          ),
        },
        {
          Header: "Volatility (last 90 days)",
          accessor: "volatility",
          Cell: ({ value }: { value: string }) => (
            <Box>${Number(value).toFixed(2)}</Box>
          ),
        },
        {
          Header: "Overall Score",
          accessor: "score.total",
          Filter: NumberRangeColumnFilter,
          filter: "between",
        },
        {
          Header: "Rating",
          accessor: "score",
          disableSortBy: true,
          Cell: ({ value }: { value: Score }) => (
            <RadarChart
              value={value.value}
              future={value.future}
              past={value.past}
              health={value.health}
              dividend={value.dividend}
            />
          ),
          width: 300,
          minWidth: 300,
          maxWidth: 300,
        },
      ] as any,
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useSortBy,
      useFlexLayout
    );

  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <Heading textAlign="center" as="h4" size="md" pt={4}>
        Company Overview
      </Heading>
      <Flex>
        <Box ml={"auto"} mt={4}>
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <Flex key={column.id} float="left">
                  <Box as="span" ml={4}>
                    <label htmlFor={column.id}>
                      {column.render("Header")}:{" "}
                    </label>
                  </Box>
                  <Box ml={2} as="span">
                    {column.render("Filter")}
                  </Box>
                </Flex>
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
              backgroundColor="#D3D3D3"
            >
              {headerGroup.headers.map((column, idx) => (
                <Th
                  userSelect="none"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={idx}
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  display="flex"
                >
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                  >
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronDownIcon ml={1} w={4} h={4} />
                      ) : (
                        <ChevronUpIcon ml={1} w={4} h={4} />
                      )
                    ) : (
                      column.canSort && <UpDownIcon ml={1} w={4} h={2} />
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
                    <Td
                      {...cell.getCellProps()}
                      key={idx}
                      textAlign="center"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
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
      <Center mb="2em">
        Showing the first {firstPageRows.length} of {rows.length} rows
      </Center>
    </>
  );
}

export default CompanyTable;
