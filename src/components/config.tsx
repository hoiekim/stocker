import React from "react";
import styled from "styled-components";
import { styles, ops } from "../lib";

const { Input, Label, Select } = styles;
const { useLocalStorage } = ops;

const MarginBox = styled.div({ margin: "1rem 0" });
const NarrowInput = styled(Input)({ width: "10rem" });
const LeftLabel = styled(Label)({ width: "15rem" });
const RightLabel = styled(Label)({ width: "2rem" });
const NarrowSelect = styled(Select)({ width: "6rem" });

interface ConfigProp {
  name: string;
}

const Config = ({ name }: ConfigProp) => {
  const units = ["minutes", "hours", "days", "weeks", "months"];

  const [fluct, setFluct] = useLocalStorage(name + "_fluct", 0);
  const [period, setPeriod] = useLocalStorage(name + "_period", 0);
  const [periodUnit, setPeriodUnit] = useLocalStorage(
    name + "_periodUnit",
    units[0]
  );
  const [trans, setTrans] = useLocalStorage(name + "_trans", 0);
  const [limit, setLimit] = useLocalStorage(name + "_limit", 0);
  const [limitUnit, setLimitUnit] = useLocalStorage(
    name + "_limitUnit",
    units[0]
  );

  const unitOptions = units.map((e, i) => <option key={i}>{e}</option>);

  return (
    <MarginBox>
      <div>
        <LeftLabel>Target Fluctuation Rate (a)</LeftLabel>
        <NarrowInput
          type="number"
          value={fluct}
          onChange={(e) => setFluct(+e.target.value)}
        />
        <RightLabel>%</RightLabel>
      </div>
      <div>
        <LeftLabel>Watching Period</LeftLabel>
        <NarrowInput
          type="number"
          min={0}
          value={period}
          onChange={(e) => setPeriod(+e.target.value)}
        />
        <NarrowSelect
          value={periodUnit}
          onChange={(e) => setPeriodUnit(e.target.value)}
        >
          {unitOptions}
        </NarrowSelect>
      </div>
      <div>
        <LeftLabel>Transaction Rate (c)</LeftLabel>
        <NarrowInput
          type="number"
          min={0}
          max={100}
          value={trans}
          onChange={(e) => setTrans(+e.target.value)}
        />
        <RightLabel>%</RightLabel>
      </div>
      <div>
        <LeftLabel>High Point Detecting Limit (n)</LeftLabel>
        <NarrowInput
          type="number"
          min={0}
          value={limit}
          onChange={(e) => setLimit(+e.target.value)}
        />
        <NarrowSelect
          value={limitUnit}
          onChange={(e) => setLimitUnit(e.target.value)}
        >
          {unitOptions}
        </NarrowSelect>
      </div>
    </MarginBox>
  );
};

export default Config;
