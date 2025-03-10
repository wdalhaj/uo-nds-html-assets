class UODropdown {
    constructor(selector) {
        // Ensure document is ready before initializing
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize(selector));
        } else {
            this.initialize(selector);
        }
    }

    initialize(selector) {
        this.dropdown = typeof selector === 'string' ?
            document.querySelector(selector) : selector;

        if (!this.dropdown) {
            throw new Error('Dropdown element not found');
        }

        this.btn = this.dropdown.querySelector('.dropdown__btn');
        this.options = this.dropdown.querySelectorAll('.dropdown__option');
        this.labelPlaceholder = this.dropdown.querySelector('.dropdown__label-placeholder');
        this._selectedOption = null;
        this._value = null;

        this.init();
    }

    init() {
        this.btn.addEventListener('click', () => {
            this.btn.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.dropdown.contains(e.target)) {
                this.btn.classList.remove('open');
            }
        });

        this.options.forEach(option => {
            option.addEventListener('click', () => {
                this.selectOption(option);
            });
        });
    }

    selectOption(selectedOption) {
        this.options.forEach(opt => opt.classList.remove('selected'));
        selectedOption.classList.add('selected');
        this._selectedOption = selectedOption;
        this._value = selectedOption.dataset.value ||
            selectedOption.querySelector('.dropdown__option-label').textContent;

        const selectedText = selectedOption.querySelector('.dropdown__option-label').textContent;
        this.labelPlaceholder.textContent = selectedText;
        this.labelPlaceholder.classList.add('dropdown__label--selection');

        this.btn.classList.remove('open');

        this.dropdown.dispatchEvent(new CustomEvent('change', {
            detail: {
                value: this.value,
                text: this.text
            }
        }));
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        const option = Array.from(this.options).find(opt =>
            opt.dataset.value === newValue ||
            opt.querySelector('.dropdown__option-label').textContent === newValue
        );
        if (option) {
            this.selectOption(option);
        }
    }

    get text() {
        if (!this._selectedOption) return null;
        return this._selectedOption.querySelector('.dropdown__option-label').textContent;
    }
}