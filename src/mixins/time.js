import { dateFormat } from "@/util/date";

export default {
 
    data() {
      return {
        time: ""
      }
    },
    created() {
      this.getTime();
      setInterval(() => {
        this.getTime();
      }, 1000);
    },
    methods: {
      getTime() {
        this.time = dateFormat(new Date());
      }
    }
  
}
