import moment from 'moment'

export default {
  formatDate (data, str = 'YYYY-MM-DD HH:mm:ss') {
    return moment(data).format(str)
  }
}