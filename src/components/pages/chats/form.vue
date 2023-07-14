<style lang="scss" scoped>
    @use "/src/assets/css/chat.css"; 
</style>
<template>
    <div class="content-title row">
        <a href="/chats/list">
            <img src="/src/assets/image/angle-left-solid.svg" alt="">
        </a>
        <h5>チャット履歴</h5>
    </div>

    <div class="content-body">
        <div class="chat-area">
            <div class="every-date">
                <div class="date">2022/04/01</div>
                <div class="chat">
                    <div class="chat-title">加盟店A  12:41</div>
                    <div class="chat-content">
                        チャットの文面が入ります。チャットの文面が入ります。チャットの文面が入ります。<br>
                        チャットの文面が入ります。
                    </div>
                </div>
                <div class="chat">
                    <div class="chat-title">加盟店A  11:50</div>
                    <div class="chat-content">
                        チャットの文面が入ります。チャットの文面が入ります。チャットの文面が入ります。<br>
                        チャットの文面が入ります。
                    </div>
                </div>
                <div class="chat">
                    <div class="chat-title">加盟店A 10:55</div>
                    <div class="chat-content">
                        チャットの文面が入ります。チャットの文面が入ります。チャットの文面が入ります。<br>
                        チャットの文面が入ります。
                    </div>
                </div>
            </div>

            <div class="every-date">
                <div class="date">2022/03/28</div>
                <div class="chat">
                    <div class="chat-title">加盟店A  15:30</div>
                    <div class="chat-content">
                        チャットの文面が入ります。チャットの文面が入ります。チャットの文面が入ります。<br>
                        チャットの文面が入ります。
                    </div>
                </div>
                <div class="chat">
                    <div class="chat-title">加盟店A  12:50</div>
                    <div class="chat-content">
                        チャットの文面が入ります。チャットの文面が入ります。チャットの文面が入ります。<br>
                        チャットの文面が入ります。
                    </div>
                </div>
                <div class="chat">
                    <div class="chat-title">加盟店A 11:55</div>
                    <div class="chat-content">
                        チャットの文面が入ります。チャットの文面が入ります。チャットの文面が入ります。<br>
                        チャットの文面が入ります。
                    </div>
                </div>
            </div>
        </div>

        <div class="chat-form">
            <textarea class="form-control" placeholder="メッセージを入力してください"></textarea>
            <img src="/src/assets/image/clip.svg" alt="" class="clip">
            <img src="/src/assets/image/send.svg" alt="" class="send">
        </div>

    </div>

</template>

<script>
    $(function(){
       
        
    });
</script>