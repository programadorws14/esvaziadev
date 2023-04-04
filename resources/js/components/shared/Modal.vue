<template>
    <div class="modal fade" :id="`${id}`" tabindex="-1" :aria-labelledby="`${id}Label`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header" v-if="showHeader">
                    <h5 class="title-modal" :id="`${id}Label`">{{ title ? title : null }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body">
                    <button type="button" v-if="!showHeader" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['id', 'title', 'showHeader'],
    mounted(){

        $('#'+this.id).modal({
            backdrop: 'static',
            keyboard: false,
            show: false,
        });
    }
    
}
</script>

<style>

.modal-content {
    border-radius: 0;
}

    
</style>
