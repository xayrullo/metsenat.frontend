<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://club.metsenat.uz/img/new-logo.svg"
        alt="Workflow"
      />
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <label for="login" class="block text-sm font-medium text-gray-700">
              LOGIN
            </label>
            <div class="mt-1">
              <input
                id="login"
                name="login"
                type="login"
                v-model="username"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-blue-500
                  focus:border-blue-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              PAROL
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                required
                class="
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-blue-500
                  focus:border-blue-500
                  sm:text-sm
                "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-blue-600
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
              "
            >
              Kirish
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      password: '',
      username: ''
    }
  },
  methods: {
    onSubmit () {
      // this.$store.dispatch('setUser', {
      //   password: this.password,
      //   username: this.username
      // }).then(() => {
      // })
      this.$router.push('/monitoring')
      console.log('Submitted')
    }
  }
}
</script>
