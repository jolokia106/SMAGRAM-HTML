<script setup>
// import List from './components/List.vue';
import sidebar from '@/components/components/layouts/sidebar.vue';
import header_view from '@/components/components/layouts/header.vue';
import footer_view from '@/components/components/layouts/footer.vue';
</script>
<template>
    <div id="default">

        <header_view />

        <main>
            <TheNavbar />
            <div class="container-fluid">
                <div class="row">

                    <sidebar />

                    <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="ms-sm-auto">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer_view />
    </div>
</template>
