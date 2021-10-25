import React, { useEffect } from "react";
import styled from "styled-components";
import { types, styles, ops } from "../lib";

const { size, Input, Label, Select } = styles;
const { useLocalStorage } = ops;

const MarginBox = styled.div({ margin: "1rem 0", padding: "0 1rem" });
const Row = styled.div({ margin: "0.5rem 0", textAlign: "center" });
const WidishInput = styled(Input)({ width: "10rem" });
const WideLabel = styled(Label)({ ...size.wide });
const InlineBox = styled.div({
  display: "inline-flex",
  width: "16.5rem",
  justifyContent: "space-between",
});

interface ConfigProp extends types.props.HasRef {
  name: string;
}

const Config = ({ customRef, name }: ConfigProp) => {
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
    units[units.length - 1]
  );

  useEffect(() => {
    if (customRef) {
      customRef.state = {
        fluct,
        period,
        periodUnit,
        trans,
        limit,
        limitUnit,
      };
    }
  }, [customRef, fluct, period, periodUnit, trans, limit, limitUnit]);

  const unitOptions = units.map((e, i) => <option key={i}>{e}</option>);

  return (
    <MarginBox>
      <Row>
        <WideLabel>Target Fluctuation Rate (a)</WideLabel>
        <InlineBox>
          <WidishInput
            type="number"
            value={fluct.toString()}
            onChange={(e) => setFluct(+e.target.value)}
          />
          <Label>%</Label>
        </InlineBox>
      </Row>
      <Row>
        <WideLabel>Watching Period</WideLabel>
        <InlineBox>
          <WidishInput
            type="number"
            min={0}
            value={period.toString()}
            onChange={(e) => setPeriod(+e.target.value)}
          />
          <Select
            value={periodUnit}
            onChange={(e) => setPeriodUnit(e.target.value)}
          >
            {unitOptions}
          </Select>
        </InlineBox>
      </Row>
      <Row>
        <WideLabel>Transaction Rate (c)</WideLabel>
        <InlineBox>
          <WidishInput
            type="number"
            min={0}
            max={100}
            value={trans.toString()}
            onChange={(e) => setTrans(+e.target.value)}
          />
          <Label>%</Label>
        </InlineBox>
      </Row>
      <Row>
        <WideLabel>High Point Detecting Limit (n)</WideLabel>
        <InlineBox>
          <WidishInput
            type="number"
            min={0}
            value={limit.toString()}
            onChange={(e) => setLimit(+e.target.value)}
          />
          <Select
            value={limitUnit}
            onChange={(e) => setLimitUnit(e.target.value)}
          >
            {unitOptions}
          </Select>
        </InlineBox>
      </Row>
    </MarginBox>
  );
};

export default Config;
