<template>
    <div class="chat_item_root">
        <div class="avatar_cont">
            <img class="avatar_img" src="./avatar.jpg">
            <div v-if="message.user.online" class="IsOnline"></div>
        </div>
        <div class="central_part">
            <div>
                {{message.user.name}} <span>{{message.created_at}}</span>
            </div>
            <div>
                {{message.avatar.text}}
            </div>
        </div>
        <div class="">
            {{message.likes}}
        </div>
    </div>
</template>

<style>
    .central_part{
        padding-right: 10px;
        padding-left: 10px;

    }
    .chat_item_root{
        display: flex;
        flex-direction: row;
        background-color: darkslategray;
        color: white;
    }
    .avatar_cont{
        position: relative;
    }
    .avatar_img{
        width: 50px;
    }
    .isOnline{
        border-radius: 50%;
        background-color: purple;
        position: absolute;
        width: 15px;
        height: 15px;
        bottom: 0;
        right: 0;
    }
</style>

<script>
export default {
    props:{
        message: { type: Object, required: true}
    }

}
</script>
