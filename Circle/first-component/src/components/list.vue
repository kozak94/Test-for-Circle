<template lang="html">
    <div class="">
        <input type="text" v-model='name' placeholder='name'>
        <input type="text" v-model='phone' placeholder='phone'>
        <button type="button" @click="addContact()" name="button"> addContact</button>
        <div class="list">
        <list-item v-for='item in listItems' :key='item.id' :phone='item'>
        </list-item>
    </div>
    
    </div>
    
</template>
<script>
        import listItem from './items.vue';
        export default {
            deta(){
                return{
                    name: '',
                    phone: '',
                    ListItems: [
                        {
                            id: 0,
                            name: 'vasya',
                            tel: '099999999'
                        }
                        {
                            id: 1,
                            name: 'Petya',
                            tel: '0999999999'
                        }       
                    ]
                }
                
            },
            methods:{
                addContacts() {
                    const obj = {
                        id: this.listItem.leaght + 1,
                        name: this.name,
                        tel: this.phone,
                    }
                    this.listItems.push(obj);
                }
            },
            components:{
               'list-item': listItem
            }

        }

</script>