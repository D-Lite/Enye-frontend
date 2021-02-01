<template>
    <div class="container">
       <div class="col-sm-12" style="display:flex; justify-content:flex-end">
            <Pagination :totalRecords="list.length" :perPageOptions = "[20,50, 100]" />
       </div>
        <h1>Records</h1>
        <div class="col-sm-11">
            <div class="input-group mb-3">
                <img src="../assets/search-pic.png" style="" class="searchicon"/>
            </div>
                <input type="text" 
                id="userinput" 
                class="form-control bg-background border-gray-500 rounded-full px-4 pl-10 py-2 outline:none searchinput"
                placeholder="Search for any record using their Email, First Name or Username" 
                aria-label="Recipient's username"
                v-model="query"
                />
        </div>
        <table class="table table-hover table-bordered container" style="margin-top: 20px">
            <thead>
                <tr>
                    <th scope="row">S/N</th>
                    <td>First Name</td>
                    <td>Username</td>
                    <td>Gender</td>
                    <td>CreditCard Type</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </tr>
            </thead>
            <tbody>
                    <p>{{list.length}}</p>

                <tr v-for="(item, index) in filteredList" v-bind:key="item.Email">
                <!-- <tr v-for="(item, index) in filteredList" v-bind:key="item.Email"> -->
                    <th scope="row"> {{ index + 1 }}</th>
                    <td>{{ item.FirstName }}</td>
                    <td>{{ item.UserName }}</td>
                    <td>{{ item.Gender }}</td>
                    <td>{{ item.CreditCardType }}</td>
                    <td>{{ item.Email.toLowerCase() }}</td>
                    <td>{{ item.PhoneNumber }}</td>
                </tr>
            </tbody>
        </table>    
    </div>
                <!-- <Pagination :valued="item" /> -->

</template>

<script>
import axios from 'axios'
import Pagination from './Pagination'

export default {
    name: "Records",
    components: {
        Pagination
    },
    data(){
        return {list: [],
        query: ''}        

    },
    mounted(){
        let url = 'https://api.enye.tech/v1/challenge/records';
        axios.get(url)
        .then((res)=> {
            this.list=res.data.records.profiles;
            // console.warn(res.data.records.profiles)
        })
    },
    // blog- item, blogs-list
    computed: {
        filteredList: function(){
            return this.list.filter((item)=>{
                return (item.FirstName.toLowerCase().match(this.query) || item.UserName.toLowerCase().match(this.query) || item.Email.toLowerCase().match(this.query));
            })
        }
    } 
}
</script>

<style lang="scss" scoped>
    .searchinput{
        width: 100%;
        height: 35px;

        background-color: #ffffff;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);

        margin: 0;
        padding: 5px 0px 0px 100px;
        box-sizing: border-box;

        appearance: none;
        border: none;
        outline: none;

        // color: #171717;
        font-family: 'Rockwell', serif;
        font-size: 16px;

        &::placeholder{
            color: #888888;
            padding-left: 20px;
        }
    }

    .searchicon{
        position: absolute;
        width: 20px;
        margin: 5px;
        color: #c4c4c4;
        margin-top: 25px;
        display: flex;
        justify-content: flex-end;
        margin-left: 2px;
    }
    
</style>