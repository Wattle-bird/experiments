class TreeRules {
  constructor(options) {
    this.options = options
  }

  b(item, step) {
    let result = 'b'
    let splitChance = this.options.branchSplitChance + step * this.options.branchSplitChanceDelta
    if (rand(1) < this.options.branchGrowChance) {
      if (rand(1) < splitChance) {
        result += ' ( + b l )'
      }
      if (rand(1) < splitChance) {
        result += ' ( - b l )'
      }
      result += ' b'
    }
    return result
  }

  l(item, step) {
    let splitChance = this.options.leafSplitChance + step * this.options.leafSplitChanceDelta

    if (rand(1) < splitChance) {
      return '( + b l ) ( - b l )'
    }
    return 'l'
  }
}

function makeTreeRulesOptions() {
  return {
    leafSplitChance: 0.04,
    branchSplitChance: 0.2, 
    leafSplitChanceDelta: 0, // -0.1 + rand(0.2)
    branchSplitChanceDelta: 0,//-0.1 + rand(0.2)
    branchGrowChance: 0.05
  }
}