class TreeRules {
  constructor(options) {
    this.options = options
  }

  b() {
    let result = 'b'
    if (rand(1) < this.options.branchSplitChance) {
      result += ' ( + b l )'
    }
    if (rand(1) < this.options.branchSplitChance) {
      result += ' ( - b l )'
    }
    result += ' b'
    return result
  }

  l() {
    if (rand(1) < this.options.leafSplitChance) {
      return '( + b l ) ( - b l )'
    }
    return 'l'
  }
}

function makeTreeRulesOptions() {
  return {
    leafSplitChance: 0.3 + rand(0.4),
    branchSplitChance: 0.4 + rand(0.3)
  }
}