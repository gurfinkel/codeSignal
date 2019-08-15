#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub reduceString {
    my ($inputString) = @_;

    my @store = split('', $inputString);
    my $c = $store[0];
    my $d = $store[@store - 1];

    while (1 <= @store && $c eq $d) {
        shift(@store);
        pop(@store);
        $c = $store[0];
        $d = $store[@store - 1];
    }

    return join('', @store);
}
