<script setup>
import Email from '../input/Email.vue'
</script>

<template>
  <div id="app">
    <section class="vh-100">
      <div class="container py-5 vh-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center bg-light">

                <h3 class="mb-5">Sign Up</h3>

                <Email id="email" title="Email" />

                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control form-control-lg" />
                  <label class="form-label" for="password">Password(6文字以上)</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="password-retype" class="form-control form-control-lg" />
                  <label class="form-label" for="password-retype">Password(再入力)</label>
                </div>
                <button class="btn btn-outline-primary btn-lg btn-block" type="submit">SignUp</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>