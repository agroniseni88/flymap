function imgFilter (data, i) {
    return data.filter(j => !(j.properties[i]))
}
export default imgFilter