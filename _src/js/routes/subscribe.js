const subscribe = {
    props: ['lists', 'user'],
    data() {
        return {
            name: '',
            email: '',
            pass1: '',
            pass2: '',
            error: '',
            authError: null,
            from: null
        };
    },
    template: `<main>
            <div class="card border-0" style="max-width: 32em">
                <div class="card-header">
                    <h2>Create an account</h2>
                    <div class="card bg-warning card bg-warning mt-3 text-dark" v-if="authError">
                        <h4>Error:</h4>
                        <p>{{authError}}</p>
                    </div>
                </div>
                <div class="card-body">
                        
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="pass1">Password</label>
                            <input type="text" class="form-control" id="pass1" placeholder="Password" v-model="pass1">
                            <small id="pass1Help" class="form-text text-muted">Password should be at least 6 characters.</small>
                        </div>
                        <div class="form-group">
                            <label for="pass2">Password (repeat)</label>
                            <input type="text" autocomplete="off" class="form-control" id="pass2" placeholder="Please re-enter your password" v-model="pass2">
                            <small class="form-text text-danger" v-if="error">{{error}}</small>
                        </div>
                        <button type="submit" class="btn btn-primary mt-4">Register account &raquo;</button>
                    </form>                
                </div>
            </div>                  
        </main>`,
    mounted() {},
    methods: {
        register() {
            const info = {
                email: this.email,
                pass: this.pass1,
                name: this.name
            };

            if (!this.error) {
                firebase.auth().createUserWithEmailAndPassword(info.email, info.pass)
                    .then((result) => {
                        return result.user.updateProfile({
                            displayName: info.name
                        }).then(() => {
                            this.$router.push(this.from ? this.from : '/dashboard');
                        });
                    }).catch((error) => {
                        this.authError = error.message;
                    });
            }

        },
        doneTyping() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                if (this.pass1 !== this.pass2) this.error = 'passwords must match';
            }, 350);

        },
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.from = from;
        });
    },
    watch: {
        pass2: function() {
            if (
                this.pass1 !== '' &&
                this.pass2 !== '' &&
                this.pass1 !== this.pass2
            ) this.doneTyping();
            else this.error = null;

        }
    }

};