import {getDriverSchoolList} from '@/api/common/select';

//驾校列表
export default {
  data() {
    return {
        driverSchools:[]
    }
  },
  methods: {
    async initDriverSchool() {
      if (!await this.beforeInit()) {
        return
      }
      return new Promise((resolve, reject) => {
        this.loading = true
        getDriverSchoolList().then(res => {
         
          let resData = res.data.data;
          let resBody = res.data.body;
          let resRs =[];
          if(resBody){
            resRs = resBody;
          }else{
            resRs= resData;
          }
          this.driverSchools = resRs
          setTimeout(() => {
            this.loading = false
          }, this.time)
          resolve(res)
        }).catch(err => {
          this.loading = false
          reject(err)
        })
      })
    }
 
  }
}
