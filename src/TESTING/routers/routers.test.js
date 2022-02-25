import { shallow } from "enzyme";
import AppRouters from "../../routers/AppRouters";

describe("router publico y privado", () => {
  test("isLogged", () => {
    const wrapper = shallow(<AppRouters />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("PublicRoute")).toContain(false);
  });
});
