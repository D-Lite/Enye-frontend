 <template>
    <section>
        <p class="pagination-container" > 
            <i class="moved fa fa-angle-double-left" @click="changePage(0)"/>
            <i class="moved fa fa-angle-left"  @click="changePage(-1)"/>
            <span class="inner-pagination-content">
                <span class="pagination-separator">|</span>
                    Showing Page {{ page }} of Pages {{ pages }}
                <span class="pagination-separator">|</span>    
            </span>
            <i class="moved fa fa-angle-right" @click="changePage(1)"/>
            <i class="moved fa fa-angle-double-right" @click="changePage(pages)"/>
        </p>
    </section>    
</template>

<script>

export default {
    name: 'Pagination',
    props: ['totalRecords', 'perPageOptions'],
    data: function() {
        return{
        page: 1,
        perPage: this.perPageOptions[0]
        }
    },
    computed: {
        pages () {
            const remainder = this.totalRecords % this.perPage

            if (remainder > 0) {
                return Math.floor(this.totalRecords / this.perPage) + 1
            }
            else{
                return this.totalRecords / this.perPage 
            }
        }
    }, 
    methods: {
        changePage(val) {
            switch (val){
                case 0: this.page = 1; break;
                case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
                case 1: this.page = this.page < this.pages ? this.page + 1: this.page; break; 
                case this.pages: this.page = this.pages; break;
            }

            this.$emit('input', {page: this.page})
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #444;
        // background-color: red;
        
        .inner-pagination-content {
            display: flex;
            align-items: center;
        }

        .pagination-separator {
            font-size: 22px;
            font-weight: 300;
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0px 20px;
        }
    }

    .moved{
        width: 40px;
        text-align: center;
        color: #2997ff;
        // background-color: orange;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2.4px;
        cursor: pointer;
    }

</style>