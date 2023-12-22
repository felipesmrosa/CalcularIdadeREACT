import { useState } from "react";

export function Conteudo() {
  const mesesDias = [
    {
      mes: "janeiro",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
    {
      mes: "fevereiro",
      dias: Array.from({ length: 28 }, (_, index) => index + 1),
    },
    {
      mes: "março",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
    {
      mes: "abril",
      dias: Array.from({ length: 30 }, (_, index) => index + 1),
    },
    {
      mes: "maio",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
    {
      mes: "junho",
      dias: Array.from({ length: 30 }, (_, index) => index + 1),
    },
    {
      mes: "julho",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
    {
      mes: "agosto",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
    {
      mes: "setembro",
      dias: Array.from({ length: 30 }, (_, index) => index + 1),
    },
    {
      mes: "outubro",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
    {
      mes: "novembro",
      dias: Array.from({ length: 30 }, (_, index) => index + 1),
    },
    {
      mes: "dezembro",
      dias: Array.from({ length: 31 }, (_, index) => index + 1),
    },
  ];
  const anos = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
    2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
    2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989,
    1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977,
    1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965,
    1964, 1963, 1962, 1961, 1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953,
    1952, 1951, 1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941,
    1940, 1939, 1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931, 1930, 1929,
    1928, 1927, 1926, 1925, 1924, 1923, 1922, 1921, 1920,
  ];

  const [mesSelecionado, setMesSelecionado] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState("");

  function handleMesChange(e) {
    setMesSelecionado(e.target.value);
    setDiaSelecionado("");
  }
  function handleDiaChange(e) {
    setDiaSelecionado(e.target.value);
  }

  const opcaoDias = mesesDias.find((m) => m.mes === mesSelecionado)?.dias || [];

  return (
    <main className="conteudo">
      <select onChange={handleMesChange} value={mesSelecionado}>
        <option value="">Selecione um mês</option>
        {mesesDias.map((mes) => (
          <option key={mes.mes} value={mes.mes}>
            {mes.mes}
          </option>
        ))}
      </select>

      {mesSelecionado && (
        <select onChange={handleDiaChange} value={diaSelecionado}>
          <option value="">Selecione um dia</option>
          {opcaoDias.map((dia) => (
            <option key={dia} value={dia}>
              {dia}
            </option>
          ))}
        </select>
      )}

      <select>
        <option value="">Selecione o ano</option>
        {anos.map((ano) => (
          <option key={ano.ano} value={ano.ano}>
            {ano}
          </option>
        ))}
      </select>
    </main>
  );
}
