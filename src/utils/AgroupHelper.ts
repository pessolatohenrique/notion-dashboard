export default class AgroupHelper {
  public static groupBy(objectList: Array<any>, property: string) {
    const result: Array<any> = objectList.reduce(function (
      list: Array<any>,
      key: any
    ) {
      list[key[property]] = list[key[property]] || [];
      list[key[property]].push(key);
      return list;
    },
    Object.create(null));

    return result;
  }

  public static countGroupedBy(object: any) {
    const listCounted = [];
    for (const key in object) {
      const element = object[key];
      listCounted.push({ [element[0].property_value]: element.length });
    }

    return listCounted;
  }

  public static ungroupProperties(list: Array<any>) {
    const ungroupedProperties: Array<any> = [];
    [...list].forEach((item) => {
      ungroupedProperties.push(...item.properties);
    });

    return ungroupedProperties;
  }
}
