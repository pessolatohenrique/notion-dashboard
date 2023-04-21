import { Printable } from "../../../src/interface/Printable";
import { LogGenerator } from "../../../src/utils/LogGenerator";

// Define a Class test
class PrintableMock implements Printable {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  public showText(): void {
    console.log(this.text);
  }
}

describe("LogGenerator Util", () => {
  it("should call showText method when object is Printable", () => {
    const obj1 = new PrintableMock("Test Object 1");
    const obj2 = new PrintableMock("Test Object 2");

    jest.spyOn(obj1, "showText");
    jest.spyOn(obj2, "showText");

    LogGenerator.printOut(obj1, obj2);

    expect(obj1.showText).toHaveBeenCalled();
    expect(obj2.showText).toHaveBeenCalled();
  });
});
