 <template>
    <section>
        <p class="pagination-container" > 
            <i class="fa fa-angle-double-left" style="color: #2997ff;"/>
            <i class="fa fa-angle-left" style="color: #2997ff;"/>
            <span class="inner-pagination-content">
                <span class="pagination-separator">|</span>
                    Showing Page {{ page }} of Pages {{ pages }}
                <span class="pagination-separator">|</span>    
            </span>
            <i class="fa fa-angle-right" style="color: #2997ff;"/>
            <i class="fa fa-angle-double-right" style="color: #2997ff;"/>
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

    .fa{
        width: 40px;
        text-align: center;
        color: #2997ff;
        background-color: orange;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>