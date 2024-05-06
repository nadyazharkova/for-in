export default function sortProperty(object, propertyKeys) {
    const otherKeys = [];
    const givenKeys = [];
    for (const props in object) {
        if (propertyKeys.includes(props)) {
            givenKeys.push(props);
        } else {
            otherKeys.push(props);
        }
    }
    otherKeys.sort();

    const keys = givenKeys.concat(otherKeys);

    return keys.map((key) => ({
        key,
        value: object[key],
    }));
}