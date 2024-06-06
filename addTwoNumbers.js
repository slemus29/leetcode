// const convertToNumber = (array) => {
//     const reverseArray = array.reverse()
//     return reverseArray.join()

// }

// const addTwoNumbers = (l1, l2) => {
//     const num1 = parseInt(l1.reverse().join(''))
//     const num2 = parseInt(l2.reverse().join(''))
//     const sum = num1 + num2
//     const sumToSring = sum.toString()
//     let result = []

//     for(let i=0; i < sumToSring.length ; i++) {
//         const number = sumToSring.charAt(i)
//         result.push(number)
//     }
//     console.log(sum, num2, result)
//     return result.reverse()
// }

// console.log(addTwoNumbers([2,4,3], [5,6,4]))

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  console.log(dummy)
  let result = dummy;
  let total = 0;
  let carry = 0;

  while(l1 || l2 || carry) {
    total = carry
    if(l1) {
        total += l1.val;
        l1 = l1.next
    }

    if(l2) {
        total += l2.val;
        l2 = l2.next
    }

    let num = total % 10;
    carry = Math.floor(total % 10)
    dummy.next = new ListNode(num)
    dummy = dummy.next;
  }

  return result.next;
};

// const node1 = new ListNode(2)
// const node2 = new ListNode(4)
// const node3 = new ListNode(3)

// node1.next= node2;
// node2.next= node3;

console.log(addTwoNumbers(new ListNode([2,4,3]), new ListNode([5,6,4])))