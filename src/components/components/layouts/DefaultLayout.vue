<script setup>
// import List from './components/List.vue';
import sidebar from '@/components/components/layouts/sidebar.vue';
import header_view from '@/components/components/layouts/header.vue';
import footer_view from '@/components/components/layouts/footer.vue';
</script>

<template>
    <!-- <div id="default"> -->
        <header_view />
    <div class="row">
        <div class="col-2">
            <sidebar />
        </div>
        <div class="col-10"  style="padding-top: 90px;">
            <router-view />
        </div>
    </div>

    <!-- <main> -->
    <!-- <TheNavbar /> -->
    <!-- <div class="container-fluid"> -->

    <!-- <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4"> -->
    <!-- <div class="ms-sm-auto"> -->
    <!-- <router-view /> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </main> -->

    <footer_view />
    <!-- </div> -->
</template>
