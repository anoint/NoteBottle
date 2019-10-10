
<script>
import Writing from './Writing'
export default {
    extends: Writing,
    data () {
        return {
            content: '',
            tags: []
        }
    },
    methods: {
        load () {
            var id =this.$router.currentRoute.params.id;
            axios.get('http://notebottle.api.test/page/'+id).then(res=>{
                console.log(res.data)
                this.content = res.data.content
                for(const tag of res.data.tags){
                    this.tags.push(tag.name)
                }
            })
        },
        register(){
            var id =this.$router.currentRoute.params.id;
            var token = this.$store.state.auth.token
            var data ={
            token:token,
            content:this.content
            }
            if(this.tags.length){
            data.tags=this.tags
            }
            axios.post('http://notebottle.api.test/page/update/'+id,data).then(res=>{
                this.$router.push({name:'post'})
            })
        }
    },
    mounted () {
        this.load()
    }
}
</script>