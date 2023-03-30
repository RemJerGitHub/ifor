Vue.createApp({
    data(){
        return{
            article:'',
            tabAchats:[],
            affiche:true
        }
    },
    methods:{
        ajouter(){
            if(this.article != ''){
                this.tabAchats.push(this.article);
                this.article='';
            }
        },
        afficherListe(){
            // ne fonctionne que s'il y'a au moins un element dans la liste
            if(this.tabAchats.length != 0)
            this.affiche = !this.affiche;
        },
        supprimer(tab,index){
            tab.splice(index,1);
        }
    }
}).mount('#monApp');