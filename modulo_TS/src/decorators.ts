//decorators

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

//atribute decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () =>["Play "] +  _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };
    
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
    })

  };
}
@apiVersion("1.11")
class Api {
  @minLength(3)
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("usuario");
console.log(api.name)
