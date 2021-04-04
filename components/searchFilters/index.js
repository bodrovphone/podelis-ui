import {
  FiltersWrapper_ST,
  Input_ST,
  Label_ST,
  Select_ST,
  Option_ST
} from "./styles";
import { GeoAlt, Cash, Tags } from "react-bootstrap-icons";

const SearchFilters = (props) => {
  return (
    <FiltersWrapper_ST>
      <Label_ST>
        <span>
          Локация
          <GeoAlt />
        </span>
        <Input_ST type="text" />
      </Label_ST>
      <Label_ST>
        <span>
          Цена
          <Cash />
        </span>
        <Input_ST placeholder="от" type="number" />
        <Input_ST placeholder="до" type="number" />
      </Label_ST>
      <Label_ST>
        <span>
          Категория
          <Tags />
        </span>
        <Select_ST name="category">
          <Option_ST value="clothes">
            Одежда
          </Option_ST>
          <Option_ST value="gadgets">
            Техника
          </Option_ST>
          <Option_ST value="vehicles">
            Транспорт
          </Option_ST>
          </Select_ST>
      </Label_ST>
      <br />
      На данный момент 45 предложений из 5 категорий
    </FiltersWrapper_ST>
  );
};

export default SearchFilters;
